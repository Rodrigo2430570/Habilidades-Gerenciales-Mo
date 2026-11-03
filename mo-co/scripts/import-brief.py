"""Import the approved fictional catalog without retyping prices/specifications."""
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = root / 'docs' / 'contenido-aprobado.md'
doc = source.read_text(encoding='utf-8')
slugs = ['bmo-play', 'cmo-assist', 'dmo-welcome', 'emo-restore', 'smo-guard', 'mmo-assist-xl', 'qmo-garden', 'omo-active', 'pmo-learn', 'wmo-audio', 'amo-classic', 'heartmo-host', 'lmo-game', 'squaremo-hub', 'flowermo-bloom']
labels = ['Procesador', 'RAM / almacenamiento', 'Materiales', 'Batería / autonomía', 'Conectividad', 'Medidas / peso', 'Color', 'Color de nuestra propuesta']
products = []
for i, match in enumerate(re.finditer(r'### \d{2} · (.+?) — (.+?)\n(.*?)(?=\n### |\n## 8\.)', doc, re.S)):
    name, role, block = match.groups()
    def field(label):
        found = re.search(r'\*\*' + re.escape(label) + r':\*\* (.*?)(?=\s*\*\*|\n|$)', block)
        return found.group(1).strip().removesuffix('.').strip() if found else ''
    def quote(label):
        return field(label).strip('«»')
    specs = {k: field(k) for k in labels if field(k)}
    memory = specs.pop('RAM / almacenamiento').split(' / ')
    specs['RAM'], specs['Almacenamiento'] = memory
    battery = specs.pop('Batería / autonomía').split('; ')
    specs['Batería'], specs['Autonomía'] = battery
    dimensions = specs.pop('Medidas / peso').rsplit('; ', 1)
    specs['Medidas'], specs['Peso'] = dimensions
    if 'Color de nuestra propuesta' in specs:
        specs['Color'] = specs.pop('Color de nuestra propuesta')
    functions = field('Funciones')
    for sentence in [' No prometer recuperación garantizada de cualquier archivo', ' Uso de supervisión, sin armas y sin prometer protección absoluta', ' Esta versión comercial se ofrece para materiales; no anunciar transporte de personas', ' Esta es una adaptación comercial del personaje, no una descripción de su conducta en la serie', ' Puede utilizarse de forma independiente en nuestra propuesta comercial']:
        functions = functions.replace('.' + sentence, '')
    sku = field('SKU')
    products.append(dict(id=sku, slug=slugs[i], name=name, role=role, price=int(re.sub(r'[^0-9]', '', field('Precio'))), category=field('Filtro'), tagline=quote('Frase de tarjeta'), description=quote('Descripción'), functions=functions, specs=specs, includes=field('Incluye'), preparation=field('Preparación'), specialDelivery=i == 5, care=field('Cuidado').split('; no inventar')[0], image='/assets/products/' + slugs[i] + '.png', alt='Ilustración de ' + name + ', ' + specs['Color'].lower(), aliases=[slugs[i].split('-')[0], name.split(' ')[0]]))
assert len(products) == 15
(root / 'src' / 'data').mkdir(exist_ok=True)
(root / 'src' / 'data' / 'products.json').write_text(json.dumps(products, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

section = doc.split('## 10. Condiciones de compra: textos listos para publicar')[1].split('## 11.')[0]
policies = []
for title, block in re.findall(r'### (.+?)\n(.*?)(?=\n### |$)', section, re.S):
    if title in ['Encabezado', 'Resumen corto para todas las fichas']:
        continue
    policies.append(dict(title=title, paragraphs=re.findall('«(.*?)»', block, re.S)))
faqs = []
section = doc.split('## 11. Preguntas frecuentes')[1].split('## 12.')[0]
for question, answer in re.findall(r'\*\*(¿.+?\?)\*\*\s*«(.*?)»', section, re.S):
    faqs.append(dict(question=question, answer=answer))
(root / 'src' / 'data' / 'service-copy.json').write_text(json.dumps(dict(policies=policies, faqs=faqs), ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Imported {len(products)} products, {len(policies)} policy sections, {len(faqs)} FAQs.')
