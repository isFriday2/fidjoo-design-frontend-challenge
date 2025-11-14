# Components

This directory contains reusable UI components to help you get started with the challenge.

## Available Components

### ThemedText
A text component that respects the app's theme and provides convenient typography presets.

```tsx
import { ThemedText } from '@/components/ThemedText';

<ThemedText type="heading" weight="bold">
  Welcome to Fidjoo
</ThemedText>

<ThemedText type="body" color="primary">
  Create your story
</ThemedText>
```

**Props:**
- `type`: 'heading' | 'body' | 'title' | 'subtitle' | 'caption'
- `weight`: 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold'
- `color`: any color key from the theme

### ThemedView
A view component with theme-aware background colors.

```tsx
import { ThemedView } from '@/components/ThemedView';

<ThemedView backgroundColor="background">
  {/* Content */}
</ThemedView>
```

**Props:**
- `backgroundColor`: any color key from the theme

### Button
A customizable button component with different variants and sizes.

```tsx
import { Button } from '@/components/Button';

<Button
  title="Start Creating"
  variant="primary"
  size="large"
  onPress={() => console.log('pressed')}
/>
```

**Props:**
- `title`: button text
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `loading`: boolean (shows loading spinner)
- `fullWidth`: boolean (button takes full width)

### Card
A card container with elevation and press effects.

```tsx
import { Card } from '@/components/Card';

<Card elevated onPress={() => console.log('card pressed')}>
  {/* Card content */}
</Card>
```

**Props:**
- `elevated`: boolean (adds shadow/elevation)
- All standard Pressable props

## Creating Your Own Components

Feel free to:
- Modify these components to fit your design
- Create new components in this directory
- Use these as examples for building child-friendly UI elements

Remember to use the theme colors and fonts from `@/constants/theme`!
