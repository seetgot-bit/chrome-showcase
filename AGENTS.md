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

- Keep showroom inventory as static data in `src/lib/cars.ts` and forms as demo-only client interactions, because this project is a visual showcase without persistence.
- Share site navigation/footer from `src/components/SiteChrome.tsx` in the root route, because all content pages use one consistent showroom frame.
