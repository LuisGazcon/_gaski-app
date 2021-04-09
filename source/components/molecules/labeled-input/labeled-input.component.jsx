import React from 'react';

import Input from '@components/atoms/input';

import { useClassNames } from '@global/hooks';

import styles from './labeled-input.module.sass';

const LabeledInput = ({ className, label, ...props }) => {
	const labeledInputClassNames = useClassNames(styles.labeledInput, className);

	return (
		<div className={labeledInputClassNames}>
			<label className={styles.label} htmlFor={props.name}>
				{label}
			</label>
			<Input className={styles.input} {...props} id={props.id ? props.id : props.name} />
		</div>
	);
};

export default LabeledInput;
