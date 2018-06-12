import {
    mobxStore,
    invalidateForm
} from './MobxStore'

describe('MobxStore Tests suite', () => {

    it('Should Invalidate', () => {
        const partialName = 'al'
        invalidateForm(partialName)
        expect(mobxStore.name)
        .toEqual('al')
    })

})