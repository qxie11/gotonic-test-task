import React from 'react';
import { Button } from 'antd';

type Props = {
    onSubmit: () => void
    onCancel: () => void
}

const Buttons: React.FC<Props> = ({
    onSubmit,
    onCancel
}) => {

    return (
        <div className="sliders__buttons">
            <Button type="primary" onClick={onCancel}>Cancel</Button>
            <Button type="primary" onClick={onSubmit}>Submit</Button>
        </div>
    );
}

export default React.memo(Buttons);
