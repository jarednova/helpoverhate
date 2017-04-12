<?php

$context = Timber::get_context();
$context['post'] = new HOH_Org();
$context['inverse'] = true;
Timber::render('single.twig', $context);