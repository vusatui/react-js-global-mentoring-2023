import {ComponentMeta, ComponentStory} from "@storybook/react";

import {useState} from "react";

import SearchForm from "../components/SearchForm";

export default {
    title: "Components/SearchForm",
    component: SearchForm,
} as ComponentMeta<typeof SearchForm>

const Template: ComponentStory<typeof SearchForm> = args => {
    const INITIAL_VALUE = "This is initial value";
    const [searchText, setSearchText] = useState(INITIAL_VALUE);

    return (
        <>
            <pre>
                SearchText = {searchText}
            </pre>
            <SearchForm
                {...args}
                initialValue={INITIAL_VALUE}
                onSearch={setSearchText}
            />
        </>
    );
};

export const Base = Template.bind({});