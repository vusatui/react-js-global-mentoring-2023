import FormMovieAdd from "../components/FormMovieAdd";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useMemo} from "react";
import {createFormModel} from "../components/FormMovieAdd/helpers";
import {FormMovieAddDTO} from "../models/FormMovieAddDTO";

export default {
    title: "Components/FormMovieAdd",
    component: FormMovieAdd,
} as ComponentMeta<typeof FormMovieAdd>;

const Template: ComponentStory<typeof FormMovieAdd> = () => {
    const model = useMemo<FormMovieAddDTO>(() => createFormModel(), []);
    return (
        <FormMovieAdd initialData={model} />
    );
};

export const Base = Template.bind({});