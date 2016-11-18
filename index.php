<?php

	$context = Timber::get_context();


	$context['inverse'] = true;
	$context['categories'] = get_categories();
	$context['pagination'] = Timber::get_pagination();

	Timber::render('index.twig', $context);