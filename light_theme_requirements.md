# Light Theme Requirements for Cybernack Website

## Current Color Scheme (Dark Theme)
- **Background**: Deep Blue (#0A1A2F)
- **Primary**: Deep Blue (#0A1A2F)
- **Secondary**: Medium Blue (#1E3A5F)
- **Accent**: Vibrant Teal (#2ECAD5)
- **Text on Dark**: White (#FFFFFF)
- **Muted**: HSL(215, 16%, 47%)
- **Success**: Bright Green (#2ECC71)
- **Warning**: Alert Orange (#E67E22)
- **Neutral Colors**:
  - Dark Gray: #2C3E50
  - Medium Gray: #7F8C8D
  - Light Gray: #ECF0F1

## Proposed Light Theme Color Scheme
- **Background**: Light Gray/White (#F8FAFC)
- **Primary**: Light Blue (#EBF8FF)
- **Secondary**: Soft Blue (#E6F0F9)
- **Accent**: Vibrant Teal (#2ECAD5) - keeping for brand consistency
- **Text on Light**: Dark Blue (#0A1A2F) - inverting the original background for text
- **Muted**: HSL(215, 16%, 47%) - keeping similar but adjusting for light background
- **Success**: Bright Green (#2ECC71) - keeping
- **Warning**: Alert Orange (#E67E22) - keeping
- **Neutral Colors**:
  - Dark Gray: #2C3E50 - keeping for contrast elements
  - Medium Gray: #7F8C8D - keeping
  - Light Gray: #ECF0F1 - will be used more prominently

## Components to Update
1. **Navbar**: Change to white/light background with dark text
2. **Footer**: Change to light gray background with dark text
3. **Hero Sections**: Use light blue backgrounds with dark text
4. **Feature Cards**: White background with shadows and dark text
5. **Pricing Cards**: White background with teal accents
6. **Buttons**: 
   - Primary: Keep teal but ensure good contrast
   - Secondary: Soft blue with dark text
   - Outline: Teal border with teal text, white background
7. **Tables**: Light background with subtle borders
8. **Forms**: White background with dark text

## Design Principles for Light Theme
1. **Maintain Brand Identity**: Keep the teal accent color for brand recognition
2. **Ensure Readability**: Maintain high contrast between text and backgrounds
3. **Create Visual Hierarchy**: Use shadows and subtle backgrounds to create depth
4. **Consistency**: Apply light theme consistently across all pages
5. **Accessibility**: Ensure all text meets WCAG contrast requirements

## Implementation Approach
1. Update CSS variables in globals.css
2. Test component appearance with new colors
3. Make adjustments to specific components as needed
4. Ensure responsive design works with new color scheme
5. Deploy updated website
