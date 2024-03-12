import File from '../../../assets/termos_uso.pdf';
import styles from "./styles.module.css";

export const TermosUso = () => {
    return (
        <object data={File} type="application/pdf" width="100%" height="100%">
        </object>
    );
};
