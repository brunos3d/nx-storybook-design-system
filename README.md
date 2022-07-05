# Nx lib + Storybook = Design System

This project was generated using [Nx](https://nx.dev).

## How to run

```bash
nx run ui:storybook
```

## Getting started

This project was created with [this article](https://blog.nrwl.io/build-your-design-system-with-storybook-nx-e3bde4087ad8) help, and this readme is a short version of the article.

Create a workspace

```bash
npx create-nx-workspace@latest
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/beae7524-c17d-4e00-98fa-19e256fbe491/Untitled.png)

Install [storybook plugin](https://nx.dev/packages/storybook) for nx

```bash
npm i -D @nrwl/storybook
```

Generate a library to add Storybook support

```bash
nx g @nrwl/react:lib ui
```

Now, let’s [configure our new library with Storybook](https://nx.dev/latest/react/react/storybook-configuration).

```bash
nx g @nrwl/react:storybook-configuration --name=ui
```

Now we can run and build our new Storybook with these commands:

```bash
nx run ui:storybook
# or
nx storybook ui
# and
nx run ui:build-storybook
# or
nx build-storybook ui
```

And these commands will use **@nrwl/storybook:storybook** and **@nrwl/storybook:build executors**.
