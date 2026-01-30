import { HeadContent, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import Header from '@/components/header';

type RouterContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
	head: () => ({
		meta: [{ name: 'description', content: 'Idea Drop' }],
	}),
	component: RootLayout,
});

function RootLayout() {
	return (
		<div className='min-h-screen bg-gray-100 flex flex-col'>
			<HeadContent />
			<Header />
			<div className='flex justify-center p-6'>
				<div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8'>
					<Outlet />
				</div>
			</div>
			<TanStackDevtools
				config={{
					position: 'bottom-right',
				}}
				plugins={[
					{
						name: 'Tanstack Router',
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</div>
	);
}
