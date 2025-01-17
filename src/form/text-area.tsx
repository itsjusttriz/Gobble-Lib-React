import { forwardRef } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BaseTheme } from '../theme';
import { Subtitle1Css } from '../typography';
import { Label } from './label';

const StyledTextArea = styled.textarea`
    ${Subtitle1Css}
    background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.color};
    color:  ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.onVariant};
    padding: 0 12px 0 16px;
    border-radius: 4px;
    border: 1px solid ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.outlineLowered};
    display: grid;
    grid-template-columns: auto 1fr auto;
    transition: background-color 0.2s;

    &:hover&:not(:focus-within) {
        background-color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.color}a8;
    }

    &:not(placeholder-shown){
        color: ${({ theme }: ThemeProps<BaseTheme>) => theme.inputs.on};
    }

    &:required, &:invalid {
        box-shadow: none;
    }
`;

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
    readonly label?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, label, ...props }: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
    return (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            <StyledTextArea aria-label={`${id}-input`} id={id} ref={ref} {...props} />
        </>
    );
});