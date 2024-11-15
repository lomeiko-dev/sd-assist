<script setup lang="ts">
import { enumTypeUI, IConfigField } from "../model/types";
import InputContainer from "./components/input-container.vue";
import {
  checkBox,
  groupColorPicker,
  groupTextarea,
  imageUploader,
  pdfUploader,
} from ".";
import { IFieldsManager } from "../model/lib/types";
import CompactDropdown from "./compacts/compact-dropdown.vue";
import CompactInputDate from "./compacts/compact-input-date.vue";
import CompactInputMask from "./compacts/compact-input-mask.vue";
import CompactInputText from "./compacts/compact-input-text.vue";
import CompactInputNumber from "./compacts/compact-input-number.vue";

interface IProps {
  config: IConfigField[];
  manager?: IFieldsManager;
}

const props = defineProps<IProps>();
</script>
<template>
  <div class="flex flex-col gap-[13px]">
    <div v-if="props.manager" v-for="conf in props.config">
      <h3 v-if="conf.title" class="text-2xl font-normal">{{ conf.title }}</h3>
      <p v-if="conf.subTitle" class="text-sm font-normal text-gray mt-[22px]">
        {{ conf.subTitle }}
      </p>

      <InputContainer :key="conf.key" :init="() => props.manager?.addLazyProps(conf.key, conf.isValid, conf.indexForm, conf.propsName)">
        <template #default>
          <CompactDropdown
            v-if="conf.type === 'dropdwn'"
            :type-u-i="conf.typeUI || enumTypeUI.GROUP"
            :option-value="conf.optionValue"
            :is-error="props.manager?.checkError(conf.key || '')"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
            :options="conf.options"
            :option-label="conf.optionLabel"
          />
          <CompactInputDate
            v-else-if="conf.type === 'date'"
            :type-u-i="conf.typeUI || enumTypeUI.GROUP"
            :min-date="conf.min"
            :max-date="conf.max"
            :is-error="props.manager?.checkError(conf.key || '')"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
            :id="conf.key"
          />
          <CompactInputMask
            v-else-if="conf.type === 'mask'"
            :error-placeholder="conf.errorPlaceholder"
            :type-u-i="conf.typeUI || enumTypeUI.GROUP"
            :is-error="props.manager?.checkError(conf.key || '')"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
            :mask="conf.mask ?? ''"
          />
          <CompactInputText
            v-else-if="conf.type === 'text'"
            :type-u-i="conf.typeUI || enumTypeUI.GROUP"
            :error-placeholder="conf.errorPlaceholder"
            :is-error="props.manager?.checkError(conf.key || '')"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
          />
          <groupTextarea
            v-else-if="conf.type === 'textarea'"
            :is-error="props.manager?.checkError(conf.key || '')"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
          />
          <CompactInputNumber
            v-else-if="conf.type === 'number'"
            :type-u-i="conf.typeUI || enumTypeUI.GROUP"
            :is-error="props.manager?.checkError(conf.key || '')"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
          />
          <groupColorPicker
            v-else-if="conf.type === 'color'"
            :is-error="props.manager?.checkError(conf.key || '')"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
          />
          <checkBox
            v-else-if="conf.type === 'checkbox'"
            :id="conf.key"
            v-model="props.manager.object[conf.key || ''].data"
            :placeholder="conf.placeholder"
          />
          <imageUploader
            v-else-if="conf.type === 'image-loader'"
            :error-message="props.manager?.checkError(conf.key || '') ? conf.errorMessage : undefined"
            v-model:model-value="props.manager.object[conf.key || ''].data"
          >
            <template #default>
              <slot :name="conf.nameSlot || 'default_name'"></slot>
            </template>
          </imageUploader>
          <pdfUploader
            v-else-if="conf.type === 'file-loader'"
            :error-message="props.manager?.checkError(conf.key || '') ? conf.errorMessage : undefined"
            v-model="props.manager.object[conf.key || ''].data"
          >
            <template #default>
              <slot :name="conf.nameSlot || 'default_name'"></slot>
            </template>
          </pdfUploader>
          <div v-if="conf.type === 'other'">
            <slot :name="conf.nameSlot || 'default_name'"></slot>
          </div>
        </template>
      </InputContainer>
    </div>
  </div>
</template>
