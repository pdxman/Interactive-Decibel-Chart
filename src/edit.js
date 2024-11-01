import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<p { ...blockProps }>
			This block displays the interactive Decibel Chart
		</p>
	);
}
