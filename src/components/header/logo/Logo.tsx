import { FC } from 'react';
import { LogoImage } from './Logo.styles';

interface LogoProps {
    src: string;
    alt?: string;
    className?: string;
}

export const Logo: FC<LogoProps> = ({ src, alt = 'Логотип', className }) => {
    return (
            <LogoImage src="/logo.webp">
            </LogoImage>
    );
};