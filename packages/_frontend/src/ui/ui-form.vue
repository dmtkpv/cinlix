<!--
    Styles
-->

<style lang="scss">

    .ui-form {

        display: grid;
        gap: 24px;

        label {
            margin-bottom: 8px;
            font-weight: 600;
        }

        &_error {
            color: $amber-dark;
            font-size: 14px;
            @at-root .ui-form_field & { margin-top: 8px }
        }

        &_footer {
            display: grid;
            gap: 24px;
            align-items: center;
            @include lg-md {
                grid-template-columns: auto 1fr;
            }
        }

    }

</style>



<!--
    Template
-->

<template>
    <form class="ui-form" @submit.prevent="submit">


        <!-- field -->

        <div class="ui-form_field" v-for="(field, key) in form">

            <label>{{ field.label }}</label>

            <component
                v-bind="field.options"
                :is="field.component"
                :model-value="value[key]"
                @update:model-value="update(key, $event)"
            />

            <p class="ui-form_error" v-if="errors[key]">{{ errors[key] }}</p>

        </div>


        <!-- footer -->

        <div class="ui-form_footer">

            <ui-button
                type="submit"
                :text="button"
                :loading="loading"
            />

            <p v-if="error" class="ui-form_error">{{ error }}</p>

        </div>


    </form>
</template>



<!--
    Scripts
-->

<script setup>

    import { reactive } from 'vue'

    const emit = defineEmits([
        'submit'
    ])

    const props = defineProps({
        form: Object,
        button: String,
        error: String,
        loading: Boolean,
        value: Object,
    })

    const errors = reactive({});



    // -----------------
    // Actions
    // -----------------

    function update (key, value) {
        props.value[key] = value;
    }

    function submit () {
        validate();
        emit('submit');
    }

    function validate () {
        for (const key in props.form) {
            const validations = props.form[key].validations;
            if (!validations) continue;
            for (const fn of validations) {
                errors[key] = fn(props.value[key])
                if (errors[key]) break;
            }
        }
    }

</script>