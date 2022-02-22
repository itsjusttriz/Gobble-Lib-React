import { ContainedButton } from '../button';
import { Modal } from './modal';

type ConfirmationOverlayProps = {
    readonly show: boolean
    readonly text: string
    readonly options: readonly {
        readonly text: string
        readonly callback: () => void
    }[]
}

export const ConfirmationOverlay = ({ show, text, options }: ConfirmationOverlayProps) => {
    return (
        <Modal show={show}>
            <span>{text}</span>
            <div>
                {
                    options.map((option, index) => {
                        return (
                            <ContainedButton key={index} onClick={() => option.callback()}>
                                {option.text}
                            </ContainedButton>
                        );
                    })
                }
            </div>
        </Modal >
    );
};