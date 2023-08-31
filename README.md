# Layout

This is to test layout concepts, focusing on a responsive
sidebar on specific pages.

The chosen breakpoint that defines the sidebar as open by
default is tailwind's `md:` classname prefix. It is scattered
around in various files.

It uses similar concepts as the `<Nav />`, but is much simpler
as there is no component duplication. I tried this approach in
the `<SidebarTest />` component, but knew there had to be a
better way.

It seems that the secret is React fragments `<></>` and a splash
of conditional logic.
