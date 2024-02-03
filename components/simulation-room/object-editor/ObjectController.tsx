// ObjectController.js
import { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

export const Button = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="mr-5 mb-4 rounded-lg ring-1 ring-[#3D2060] w-[140px] h-[45px] flex items-center justify-center bg-gradient-to-r from-[#2F1753]/40 to-[#24133D]/40"
    >
        {children}
    </button>
);

export const PositionLabel = ({ label, value }: { label: ReactNode; value: number }) => (
    <div className="ps-1">
        <label className="font-bold mr-2">{label} :</label>
        <span className="ring-1 ring-[#381C5A] px-2 py-0.5 rounded-lg bg-gradient-to-r from-[#2F1753]/40 to-[#24133D]/40 mr-6 font-bold text-xs">
            {value.toFixed(2)}
        </span>
    </div>
);

const ObjectController = ({
    object,
    onScaleUp,
    onScaleDown,
    onSelect,
    onDelete,
}: {
    object: { x: number; y: number; z: number };
    onScaleUp: () => void;
    onScaleDown: () => void;
    onSelect: () => void;
    onDelete: () => void;
}) => {
    return (
        <div
            className={twJoin(
                'mb-6 py-2 overflow-hidden rounded-xl ring-1 ring-[#6B41A8]',
                'bg-gradient-to-r from-[#9167C2] to-[#533b78]'
            )}
        >
            <div className="mt-2 ml-5">
                <h3 className="mb-4 text-lg font-bold">Position</h3>
                <div className="flex space-x-2">
                    <PositionLabel label="x" value={object.x} />
                    <PositionLabel label="y" value={object.y} />
                    <PositionLabel label="z" value={object.z} />
                </div>
                <div className="mt-10 h-30 grid grid-rows-2 grid-flow-col">
                    <Button onClick={onScaleUp}>Scale Up</Button>
                    <Button onClick={onSelect}>Select</Button>
                    <Button onClick={onScaleDown}>Scale Down</Button>
                    <Button onClick={onDelete}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default ObjectController;
