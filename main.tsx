/** @jsx h */

import blog, { ga, redirects, h } from "blog";
import { Post } from "https://deno.land/x/blog@0.7.0/types.js";

blog({
  title: "It's Trail",
  description: "This is my new blog.",
  header: <header>Your custom header</header>,
  section: (post: Post) => <section>Your custom section with access to Post props.
  {Post}</section>,
  footer: <footer>Your custom footer</footer>,
  avatar: "./icon.gif",
  avatarClass: "rounded-full",
  author: "Ittetsu Sato",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
