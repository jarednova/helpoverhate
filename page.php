<?php

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['inverse'] = true;
Timber::render(array('page-'.$post->slug.'.twig', 'page.twig'), $context);