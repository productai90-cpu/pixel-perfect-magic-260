<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- UI is Persian and RTL: `<html lang="fa" dir="rtl">` in `src/routes/__root.tsx`; all prices/counts render through `src/lib/persian.ts` so digits stay Eastern Arabic.
- Cart state lives in `src/context/CartContext.tsx`, mounted in `__root.tsx` so it survives route changes; no backend yet.
- Menu items, categories and business details are a single source in `src/data/menu.ts`, ready to swap for a real menu backend.
- Checkout at `/checkout` ends in a mock confirmation; wire a real payment gateway into its `submit` handler.
