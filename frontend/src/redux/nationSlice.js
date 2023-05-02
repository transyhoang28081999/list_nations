import { createSlice } from "@reduxjs/toolkit";

const nationSlice = createSlice({
    name: "nation",
    initialState: {
        nations:{
            allNations: null,
            isLoading: false,
            error: false
        },
        singleNation: {
            nation: null,
            isLoading: false,
            error: false
        },
        createOrUpdateNation: {
            isLoading: false,
            error: false
        },
        deleteNation: {
            isLoading: false,
            error: false
        }
    },
    reducers:{
        //get all nations
        getNationsStart: state => {
            state.nations.isLoading = true
        },
        getNationsSuccess: (state, action) => {
            state.nations.isLoading = false
            state.nations.allNations = action.payload
        },
        getNationsFailed: state => {
            state.nations.isLoading = false
            state.nations.error = true
        },
        // get single nation
        getSingleNationStart: state => {
            state.singleNation.isLoading = true
        },
        getSingleNationSuccess: (state, action) => {
            state.singleNation.isLoading = false
            state.singleNation.nation = action.payload
            state.singleNation.error = false
        },
        getSingleNationFailed: state => {
            state.singleNation.isLoading = false
            state.singleNation.error = true
        },
        // create or update new nation
        createOrUpdateNationStart: state => {
            state.createOrUpdateNation.isLoading = true
        },
        createOrUpdateNationSuccess: state => {
            state.createOrUpdateNation.isLoading = false
            state.createOrUpdateNation.error = false
        },
        createOrUpdateNationFailed: state => {
            state.createOrUpdateNation.isLoading = false
            state.createOrUpdateNation.error = true
        },
        //delete a nation
        deleteNationStart: state => {
            state.deleteNation.isLoading = true
        },
        deleteNationSuccess: state => {
            state.deleteNation.isLoading = false
            state.deleteNation.error = false
        },
        deleteNationFailed: state => {
            state.deleteNation.isLoading = false
            state.deleteNation.error = true
        }
    }
})

export const {
    //get all nations
    getNationsStart,
    getNationsSuccess,
    getNationsFailed,
    //get single nation
    getSingleNationStart,
    getSingleNationSuccess,
    getSingleNationFailed,
    //create new nation
    createOrUpdateNationStart,
    createOrUpdateNationSuccess,
    createOrUpdateNationFailed,
    // delete a nation
    deleteNationStart,
    deleteNationSuccess,
    deleteNationFailed
} = nationSlice.actions;

export default nationSlice.reducer