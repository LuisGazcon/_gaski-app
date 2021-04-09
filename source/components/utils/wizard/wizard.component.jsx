import React, { useState, cloneElement, createContext, useContext } from 'react';

const WizardContext = createContext();

const WizardProvider = ({ children, context }) => {
	return <WizardContext.Provider value={context}>{children}</WizardContext.Provider>;
};

const Wizard = ({ children, context }) => {
	const [step, setStep] = useState(0);
	const hasPrev = step > 0;
	const hasNext = step < children.length - 1;
	const next = () => setStep(step + 1);
	const prev = () => setStep(step - 1);
	let steps = children.map((child) =>
		cloneElement(child, {
			hasPrev,
			prev,
			hasNext,
			next,
		}),
	);

	return <WizardProvider context={context}>{steps[step]}</WizardProvider>;
};

Wizard.Step = ({ component: Component, children, ...props }) => {
	const context = useContext(WizardContext);
	return <Component context={context} {...props} />;
};

export default Wizard;
