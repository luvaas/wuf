Paper Elements
------------------
This package doesn't provide any packages itself.  Instead, it installs various package dependencies for Polymer components, including base Polymer.  By installing this package instead of the Polymer components directy, you are ensuring that your Polymer component versions have been tested for compatibility with WUF.  

## Installation

```bash
npm install @kion/kg-poly-vaadin-elements @kion/kg-poly-grid-styles
```

Then add the following lines to your application's `app.module.ts` file:

```typescript
import '@kion/kg-poly-grid-styles';
```
