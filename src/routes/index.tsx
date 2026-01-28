import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	head: () => ({
		meta: [
			{
				name: 'description',
				content: 'Share, explore and build on the best startup ideas and side hustles.',
			},
			{
				title: 'Idea Drop - Your Idea Hub',
			},
		],
	}),
	component: App,
});

function App() {
	return <>My App</>;
}
