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

## Buildx architecture
- Keep course catalog data (including each course's Whop `checkoutUrl`) in `src/lib/buildx.ts`; product cards link straight to that checkout URL via a "Buy now" button. There is no cart.
- Keep the Buildx storefront UI in `src/components/buildx.tsx` and compose it from the existing design-system Button, Input, and Textarea primitives; this keeps visual and form behavior centralized.
