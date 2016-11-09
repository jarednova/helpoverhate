<?php

$context = Timber::get_context();
$context['post'] = new TimberPost();
$context['inverse'] = true;
$cover_image_id = $post->cover_image;
$context['cover_image'] = new TimberImage($cover_image_id);
Timber::render('single.twig', $context);