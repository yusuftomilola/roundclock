export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const UPDATE_FORM_VALUES = 'UPDATE_FORM_VALUES';
export const SUBMIT_FORM = 'SUBMIT_FORM';


export const initialState = {
    step: 1,
    formValues: {
        personalDetails: {
            name: "",
            gender: "",
            subscription_type: "",
            space_allocated: "",
            phone: "",
            email: "",
            referral_code: "",
            referral_channel: ''
        },
        additionalInformation: {
            IdType: '',
            contactAddress: '',
            IdDocument: '',
            nextOfKin: '',
            nextOfKinPhone: '',
            photo: '',
            signedLeaseAgreementCopy: ''
        },
    }
}


export const newHubUserReducer = (state, action) => {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
                step: Math.min(state.step + 1, 2), // Prevent exceeding step count (2 is the last step in this case)
            };
        case PREV_STEP:
            return {
                ...state,
                step: Math.max(state.step - 1, 1), // Prevent going below step 1
            };
        case UPDATE_FORM_VALUES:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    [action.payload.field]: action.payload.values,
                },
            };

        case SUBMIT_FORM:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                },
            };

        default:
            return state;
    }
};



