/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'create-block', {
	actions: {
		updateColor(){
			const context = getContext();
			console.log("color: " , context.backgroundColor); 
		},
		// toggleTextColor: () => {
		// 	const context = getContext();
		// 	context.color = context.color === 'red' ? 'green' : 'red' ; 
		// 	if(context.paddingTop == '300'){
		// 		context.paddingTop += 0; 
		// 	} else {
		// 		context.paddingTop += 10; 
		// 	}
			
		// 	console.log("increase ", context.paddingTop)
		// },
		toggleHeight: () => {
			const context = getContext();
			if (context.height < 140) {
				context.height += 10;
			};
		
			const sounds = context.sounds; 
			const soundIndex = Math.floor(context.height / 10) % sounds.length; // Calculate sound index based on height

			context.sound = sounds[soundIndex];

			if(context.height < 30){
				context.backgroundColor = '#00FF00';		
			} else if(context.height < 60) {
				context.backgroundColor = '#66FF00';
			} else if(context.height < 90){
				context.backgroundColor = '#FFFF00';
			} else if(context.height < 110){
				context.backgroundColor = '#FF9900';
			} else{
				context.backgroundColor = '#FF0000';
			}
			
		
		},
		decreaseNumber: () => {
			const context = getContext();
			if (context.height > 0) {
				context.height -= 10;
			};

			const sounds = context.sounds; 
			const soundIndex = Math.floor(context.height / 10) % sounds.length; // Calculate sound index based on height

			context.sound = sounds[soundIndex];

			if(context.height < 30){
				context.backgroundColor = '#00FF00';		
			} else if(context.height < 60) {
				context.backgroundColor = '#66FF00';
			} else if(context.height < 90){
				context.backgroundColor = '#FFFF00';
			} else if(context.height < 110){
				context.backgroundColor = '#FF9900';
			} else{
				context.backgroundColor = '#FF0000';
			}
		}
	},
} );
