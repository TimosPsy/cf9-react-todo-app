export interface LayoutProps {
    children: React.ReactNode;
    addClasses?: string;
}

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    addClasses?: string;
}


export type IconButtonProps = {
    icon: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    addClasses?: string;
}