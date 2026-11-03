"""Open the existing static export with a double click on iniciar.bat."""
import argparse
import errno
import socket
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.request import urlopen
import webbrowser


class LocalServer(ThreadingHTTPServer):
    # Windows otherwise permits another HTTPServer to take the same port.
    allow_reuse_address = False

    def server_bind(self):
        if hasattr(socket, 'SO_EXCLUSIVEADDRUSE'):
            self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_EXCLUSIVEADDRUSE, 1)
        super().server_bind()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--no-browser', action='store_true', help='Serve without opening a browser.')
    args = parser.parse_args()
    site = Path(__file__).resolve().parents[1] / 'dist'
    index = site / 'index.html'
    if not index.is_file():
        print('No se encontro la pagina compilada en mo-co/dist.')
        print('Desde mo-co, ejecuta npm run build y vuelve a abrir iniciar.bat.')
        return 1

    handler = partial(SimpleHTTPRequestHandler, directory=str(site))
    server = None
    for port in range(4173, 4184):
        url = f'http://127.0.0.1:{port}/'
        try:
            server = LocalServer(('127.0.0.1', port), handler)
            break
        except OSError as error:
            if error.errno != errno.EADDRINUSE and getattr(error, 'winerror', None) != 10048:
                print(f'No se pudo iniciar el servidor: {error}')
                return 1
            # A second double click reuses this exact export when already open.
            try:
                with urlopen(url, timeout=1) as response:
                    same_site = response.read() == index.read_bytes()
                if same_site:
                    print(f'MO Co. ya esta disponible en {url}')
                    if not args.no_browser:
                        webbrowser.open(url)
                    return 0
            except OSError:
                pass

    if server is None:
        print('Los puertos locales 4173 a 4183 estan ocupados. Cierra una instancia e intenta de nuevo.')
        return 1

    print(f'MO Co. disponible en {url}', flush=True)
    print('Deja esta ventana abierta mientras uses la pagina.', flush=True)
    print('Para detenerla, cierra esta ventana o presiona Ctrl+C.', flush=True)
    if not args.no_browser:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nPagina detenida.')
    finally:
        server.server_close()
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
