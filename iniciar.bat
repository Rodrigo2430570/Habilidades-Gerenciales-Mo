@echo off
setlocal
title MO Co. - Iniciar pagina
cd /d "%~dp0"

python --version >nul 2>&1
if not errorlevel 1 (
    python "%~dp0mo-co\scripts\iniciar.py"
    goto :resultado
)

py -3 --version >nul 2>&1
if not errorlevel 1 (
    py -3 "%~dp0mo-co\scripts\iniciar.py"
    goto :resultado
)

echo No se encontro Python 3. Instala Python y vuelve a abrir este archivo.
pause
exit /b 1

:resultado
if errorlevel 1 (
    echo.
    echo No se pudo iniciar la pagina. Revisa el mensaje anterior.
    pause
    exit /b 1
)
exit /b 0
