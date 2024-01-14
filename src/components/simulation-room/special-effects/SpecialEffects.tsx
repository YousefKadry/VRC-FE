import { useState } from 'react';
import Switch from '../../ui/switch/Switch';

const SpecialEffects = () => {
    //todo: replace state with redux
    const [effects, setEffects] = useState({ stars: false, clouds: false });

    const handleEffectsChanging = (checked: boolean, _: any, id: string) => {
        setEffects((currEffects) => ({ ...currEffects, [id]: checked }));
    };

    return (
        <div>
            <div className="flex gap-x-12 gap-y-4 flex-wrap">
                <Switch
                    id="stars"
                    checked={effects.stars}
                    title="Stars"
                    toggleHandler={handleEffectsChanging}
                />

                <Switch
                    id="clouds"
                    checked={effects.clouds}
                    title="Clouds"
                    toggleHandler={handleEffectsChanging}
                />
            </div>
        </div>
    );
};

export default SpecialEffects;
