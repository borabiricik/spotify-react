import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "../routes";

const Layout = () => {
	const navbarRef = useRef<HTMLDivElement>(null);
	const [navbarWidth, setnavbarWidth] = useState(0);
	const navigate = useNavigate();
	const handleResize = () => {
		if (navbarRef.current) {
			setnavbarWidth(navbarRef.current?.clientWidth);
		}
	};
	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
	}, []);

	return (
		<div className='flex'>
			<div
				ref={navbarRef}
				className='bg-black text-white h-[100vh] fixed left-0 top-0 bottom-0 flex flex-col w-[300px] items-center p-[10px]'
			>
				<div className='flex justify-start w-full px-[29px] py-[31px]'>
					<img src={"/images/Spotifylogo.png"} className='w-[164px] h-[49px]' alt='logo' />
				</div>
				{routes.map((route, index) => {
					return (
						<button
							className='w-full text-left flex items-center py-3 hover:bg-white hover:bg-opacity-20 transition-all rounded-md'
							key={index}
							onClick={() => navigate(route.path)}
						>
							<img src={route.iconPath} alt='icon' className='mx-6' />
							{route.title}
						</button>
					);
				})}
			</div>

			<div className='flex-1 bg-[#0E0E0E] h-[100vh] text-white' style={{ marginLeft: navbarRef.current?.clientWidth }}>
				<Routes>
					{routes.map((route, index) => {
						const MyRoute = route.element;
						return <Route key={index} path={route.path} element={<MyRoute />} />;
					})}
				</Routes>
			</div>
		</div>
	);
};

export default Layout;
