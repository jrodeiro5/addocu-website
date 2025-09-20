# Logo Carousel Component

Un carrusel de logos minimalista y moderno inspirado en el estilo de Optimizely, perfectamente integrado con el sistema de diseño de Addocu.

## Características

- ✅ **Animación fluida infinita** - Scroll continuo sin interrupciones
- ✅ **Pausa al hover** - Se detiene cuando el usuario interactúa
- ✅ **Totalmente responsive** - Funciona en todos los dispositivos
- ✅ **Accesible** - Incluye aria-labels y navegación por teclado
- ✅ **Optimizado** - Usa animaciones CSS nativas para mejor rendimiento
- ✅ **Customizable** - Velocidad, títulos y logos configurables

## Uso Básico

```tsx
import { LogoCarousel, placeholderLogos } from '@/components/marketing';

<LogoCarousel
  title="Trusted by digital marketing teams"
  subtitle="Join hundreds of marketers who save hours every month"
  logos={placeholderLogos}
  speed={35}
/>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | "Trusted by digital marketing teams" | Título principal |
| `subtitle` | `string` | `undefined` | Subtítulo opcional |
| `logos` | `LogoItem[]` | - | Array de logos a mostrar |
| `speed` | `number` | `40` | Velocidad de la animación en segundos |
| `className` | `string` | `""` | Clases CSS adicionales |

## Estructura de Logo

```tsx
interface LogoItem {
  name: string;        // Nombre para alt text
  logo: string;        // URL o base64 de la imagen
  width?: number;      // Ancho opcional
  height?: number;     // Alto opcional
}
```

## Personalización

### Cambiar los logos

1. **Usar logos existentes:**
```tsx
import { customerLogos, agencyLogos } from '@/components/marketing';

<LogoCarousel logos={customerLogos} />
```

2. **Crear logos personalizados:**
```tsx
import { createLogoArray } from '@/components/marketing';

const myLogos = createLogoArray([
  {
    name: 'Mi Empresa',
    logo: '/path/to/logo.svg',
    width: 120,
    height: 40
  }
]);

<LogoCarousel logos={myLogos} />
```

### Cambiar la velocidad

```tsx
// Más lento (60 segundos)
<LogoCarousel speed={60} logos={logos} />

// Más rápido (20 segundos)
<LogoCarousel speed={20} logos={logos} />
```

### Personalizar estilos

```tsx
<LogoCarousel 
  className="bg-gray-900 text-white" 
  logos={logos} 
/>
```

## Mejores Prácticas

1. **Logos optimizados**: Usa SVG o imágenes optimizadas
2. **Cantidad**: 6-8 logos funcionan mejor visualmente
3. **Consistencia**: Mantén alturas similares entre logos
4. **Contraste**: Usa filtros grayscale para consistencia visual
5. **Credibilidad**: Solo incluye logos de clientes reales

## Personalización Avanzada

### Cambiar colores de fondo

Edita el componente en `components/marketing/logo-carousel.tsx`:

```tsx
// Cambiar de bg-gray-50 a tu color preferido
<section className={`py-16 bg-white ${className}`}>
```

### Modificar efectos hover

```tsx
// En el componente, personaliza estas clases:
className="opacity-60 hover:opacity-100 transition-opacity duration-300"
```

### Ajustar espaciado

```tsx
// Cambiar space-x-16 por el espaciado deseado
<div className="flex items-center justify-center space-x-12 px-8">
```

## Troubleshooting

### El carrusel no se anima
- Verifica que `globals.css` incluya las animaciones
- Asegúrate de que Tailwind CSS esté configurado correctamente

### Los logos no se ven bien
- Revisa las dimensiones width/height de cada logo
- Usa imágenes del mismo tipo (SVG recomendado)
- Aplica filtros CSS si es necesario

### Performance issues
- Optimiza las imágenes antes de usar
- Considera usar WebP para mejor compresión
- Limit el número de logos a 8-10 máximo

## Roadmap

- [ ] Soporte para múltiples filas
- [ ] Dirección de scroll configurable
- [ ] Lazy loading de imágenes
- [ ] Modo dark automático
- [ ] Integración con CMS
