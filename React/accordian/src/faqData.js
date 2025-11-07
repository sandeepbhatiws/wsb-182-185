var data = [
    {
        id: 1,
        question: "What is this project?",
        answer: "A small React accordion example that displays frequently asked questions."
    },
    {
        id: 2,
        question: "How do I run the project?",
        answer: "Install dependencies with npm or yarn, then run npm start (or yarn start) to launch the dev server."
    },
    {
        id: 3,
        question: "Which React version is required?",
        answer: "Any React 16.8+ release is fine (hooks are used in many examples)."
    },
    {
        id: 4,
        question: "Can I add more FAQ items?",
        answer: "Yes — add another object to the array with a unique id, question, and answer."
    },
    {
        id: 5,
        question: "How do I style the accordion?",
        answer: "Use CSS or a CSS-in-JS solution; each item can have classes for open/closed states."
    },
    {
        id: 6,
        question: "Is this accessible?",
        answer: "Ensure proper ARIA attributes and keyboard handlers for accessibility."
    },
    {
        id: 7,
        question: "How do I make multiple items open at once?",
        answer: "Change the component state so it tracks an array of open ids instead of a single id."
    },
    {
        id: 8,
        question: "Can I fetch FAQ data from an API?",
        answer: "Yes — fetch the data in a parent component (useEffect) and pass it as props to the accordion."
    },
    {
        id: 9,
        question: "What file exports this data?",
        answer: "This file exports the data array; import it where the accordion component needs the FAQ items."
    },
    {
        id: 10,
        question: "How do I contribute changes?",
        answer: "Fork the repo, make changes, run tests (if any), and open a pull request with a description of your changes."
    }
];

export default data;