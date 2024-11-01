<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$context = array(
	'isOpen' => false,
	'backgroundColor' => '#00FF00',
	'paddingTop' => 0,
	'height' => 0,
	'sound' => '',
	'sounds' => array(
			//   "0" => "hello",
			//   "1" => "hola",
			//   "2" => "olá" 
			"0" => "Threshold of human hearing",
			"1" => "Breathing",
			"2" => "Rustling leaves, ticking watch, whispering from 5 feet away",
			"3" => "Whisper from nearby",
			"4" => "Quiet library, average room noise",
			"5" => "Certified quiet dishwasher",
			"6" => "normal conversation, air conditioning unit",
			"7" => "Vacuum cleaner, washing machine, average maximum television",
			"8" => "Garbage disposal, food blender, alarm clock",
			"9" => "Motorcycle at 25 feet, lawn mower, power tools, hair dryer",
			"10" => "Dog's bark, snowmobile, hair dryer",
			"11" => "Concert, Sporting events",
			"12" => "Car horn, steel mill, siren",
			"13" => "Jet taking off, jackhammer",
			"14" => "Aircraft carrier deck, fireworks"
		)
	);

?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context($context); ?>
	class="block-wrapper"
	data-wp-style--background="context.backgroundColor"
>
	<div>
		<div class="bar-graph">
				<div class="bar" data-wp-style--height="context.height"></div>
			</div>
		<button data-wp-on--click="actions.toggleHeight">Increase</button>
		<button data-wp-on--click="actions.decreaseNumber">Decrease</button>
	</div>
	<div class="number">
		<div>
			<h2><span data-wp-text="context.height"></span> decibels</h2>
		</div>	
		<div>
			<h3>Sound</h3>
			<p 
				class="sound" 
				data-wp-text="context.sound"
			></p>
		</div>	
	</div>	
</div>


