import croct from '@croct/plug';

type TypeCroctPlug = {
    appId: string,
    debug?: boolean,
}

const croctPlug: TypeCroctPlug = {
    appId: '00000000-0000-0000-0000-000000000000',
    debug: true,
};

croct.plug(croctPlug);

const setPersona = async (setPersona: string): Promise<void> => {
    await croct.user.edit()
        .set('custom.persona', setPersona)
        .save();
};

export default setPersona;