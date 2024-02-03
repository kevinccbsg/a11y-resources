# Portfolio

This folders includes a react + typescript + vite app with two pages `/` (accessible) and `/inaccessible` where you can find a portfolio example. One accessible and the other one with a lot of errors.

Now, we will talk about the main errors.

## 1.4 Distinguishable

Make it easier for users to see and hear content including separating foreground from background. [WCAG](https://www.w3.org/TR/WCAG22/#distinguishable).

### 1.4.3 Contrast (Minimum)

(Level AA)
The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

**Large Text**
Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

In these portfolio there are a lot of errors with the contrast. Most of the texts and the background are not valid and you can check that using the [wave extesion](https://wave.webaim.org/extension/) or this [contrast checker](https://webaim.org/resources/contrastchecker/).

**Solution**

```tsx
// Add better background bg-slate-800 text-white pb-12
import Content from "./components/Content";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="bg-slate-800 text-white pb-12">
      <Header />
      <div>
        <Content />
      </div>
    </div>
  );
}
```

⚠ This will not be [AAA compliance](https://www.w3.org/TR/WCAG22/#contrast-enhanced) for the submit button in the form ⚠ 

