/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersUpdateFormInputValues = {
    username?: string;
    name?: string;
    university?: string;
    skills?: string[];
    interests?: string[];
    image?: string;
    experiences?: string[];
    education?: string[];
};
export declare type UsersUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    university?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
    interests?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    experiences?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersUpdateFormOverridesProps = {
    UsersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    university?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
    interests?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    experiences?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    users?: Users;
    onSubmit?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onSuccess?: (fields: UsersUpdateFormInputValues) => void;
    onError?: (fields: UsersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersUpdateFormInputValues) => UsersUpdateFormInputValues;
    onValidate?: UsersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersUpdateForm(props: UsersUpdateFormProps): React.ReactElement;
