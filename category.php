<?php

	$context = Timber::get_context();
	$context['intro_text'] = 'Hello from Category.php';
	$context['inverse'] = true;
	$context['active'] = false;
	$context['category'] = new TimberTerm();
	$context['pagination'] = Timber::get_pagination();
	$context['categories'] = get_categories();

	Timber::render('category.twig', $context);