import React from "react";

export default function Input ({
                                   idAttribute,
                                   nameAttribute,
                                   inputType,
                                   labelText,
                                   placeholderAttribute,
                                   validationRules,
                                   register,
                                   errors}) {

    return (
        <>
        <label htmlFor = {idAttribute}>
            {labelText}
            <input
                type = {inputType}
                id = {idAttribute}
                placeholder={placeholderAttribute}
                {...register(nameAttribute, validationRules)}
            />
        </label>
            {errors[nameAttribute] && <p className = "p-error">{errors[nameAttribute].message}</p>}
        </>
    );
}