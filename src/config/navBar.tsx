import { Component } from 'preact';
import { Icon, ComponentWithAs } from "@chakra-ui/react"
import { IconProps } from "@chakra-ui/icons"
import { DiGithubBadge } from "react-icons/di"
import { AiFillLinkedin } from "react-icons/ai"

export interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

export interface SocialMediaItem {
	label: string;
	href?: string;
	svg?: ComponentWithAs<"svg", IconProps>;
}

export const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'Projects',
		href: '/projects'
	},
	{
		label: 'About me',
		href: '/about-me',
	}
];

export const SOCIAL_MEDIA: Array<SocialMediaItem> = [
	{
		label: 'Github',
		href: 'https://github.com/noobmaster19',
		svg: <Icon as={DiGithubBadge} w={6} h={6} />
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/dion-neo-470a161a6/',
		svg: <Icon as={AiFillLinkedin} w={6} h={6} />
	}
];