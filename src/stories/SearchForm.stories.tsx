import {ComponentMeta, ComponentStory} from "@storybook/react";

import {useState} from "react";

import SearchForm from "../components/SearchForm";

export default {
    title: "Components/SearchFhandleGenreSelectorm",
    component: SearchForm,
} as ComponentMeta<typeof SearchForm>

const INITIAL_VALUE = "This is initial value";

const Template: ComponentStory<typeof SearchForm> = args => {
    const [searchText, setSearchText] = useState(INITIAL_VALUE);

    const handleSearch = (value: string) => setSearchText(value);

    return (
        <>
            <pre>SearchText = {searchText}</pre>
            <SearchForm
                {...args}
                initialValue={INITIAL_VALUE}
                onSearch={handleSearch}
            />
        </>
    );
};

export const Base = Template.bind({});