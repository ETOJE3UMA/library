<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/book' }">
        <app-i18n code="entities.book.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.book.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.book.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.book.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.book.new.title"
          v-if="!isEditing"
        ></app-i18n>
        <svg
          class="book"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M10.0186 12.4446V23.1161C10.0186 23.5906 9.71943 24.0127 9.27283 24.169C8.64089 24.3912 7.87832 24.5084 7.06662 24.5084C4.73202 24.5084 2.221 23.5504 2.221 21.447V7.79215C2.16853 6.85429 2.49566 5.1974 4.06658 4.30085C4.79566 3.8844 8.62414 1.42251 10.5468 0.17873C10.8895 -0.0434532 11.3272 -0.0590842 11.6867 0.135187C12.0462 0.331691 12.2695 0.707952 12.2695 1.11659V2.73328C12.2695 3.34959 11.7693 3.84979 11.153 3.84979C10.6729 3.84979 10.2632 3.54721 10.1057 3.12071C8.36846 4.23721 5.80944 5.87624 5.17415 6.2391C4.6025 6.56623 4.47857 7.16691 4.45401 7.49293C4.45401 7.85914 4.53328 8.1472 4.67619 8.30463C5.07255 8.73671 6.39337 8.46764 7.83477 7.60235C9.21923 6.77167 16.0478 2.22528 16.1159 2.1795C16.4609 1.95062 16.9008 1.9294 17.2614 2.12479C17.6254 2.31906 17.852 2.69756 17.852 3.10955V3.23683C17.852 3.60974 17.6656 3.95809 17.3563 4.16576C17.3563 4.16576 12.6156 7.32992 12.1958 7.599C10.5892 8.63288 10.0186 9.90122 10.0186 12.4446ZM26.784 7.05638V21.5508C26.784 21.9338 26.5864 22.291 26.2615 22.4954C26.2615 22.4954 19.7523 27.5509 18.4315 28.3536C17.737 28.7768 16.8528 29.0001 15.8758 29.0001C13.5546 29.0001 11.153 27.744 11.153 25.6439V12.1164V11.7892C11.153 11.7848 11.1564 11.7803 11.1564 11.7747C11.1787 10.9574 11.3696 9.79069 12.8892 8.66972C13.8002 7.99759 19.2264 4.2975 19.4564 4.14119C19.7992 3.90896 20.2425 3.8844 20.6064 4.07644C20.9726 4.26959 21.2015 4.6492 21.2015 5.06342V6.68012C21.2015 7.29642 20.7024 7.79662 20.085 7.79662C19.6239 7.79662 19.2276 7.51749 19.0578 7.11778C17.3261 8.30239 14.7839 10.0475 14.2145 10.4662C13.4954 10.9976 13.3994 11.3482 13.3871 11.7982C13.3894 12.132 13.4798 12.3866 13.6629 12.554C14.2323 13.0754 15.7653 12.8566 17.277 11.95C18.3958 11.2779 23.2168 7.55545 24.9786 6.17769C25.3169 5.91643 25.7725 5.86842 26.1566 6.05488C26.5406 6.24133 26.784 6.62876 26.784 7.05638ZM24.551 12.0315L18.9685 16.3624V18.5954L24.551 14.2645V12.0315Z"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="29" height="29" />
            </clipPath>
          </defs>
        </svg>
      </h1>
    
    <div
      class="app-page-spinner"
      v-if="findLoading"
      v-loading="findLoading"
    ></div>

    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doSubmit"
      class="form"
      ref="form"
      v-if="model"
    >
      <el-form-item
        :label="fields.id.label"
        :prop="fields.id.name"
        v-if="isEditing"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            :disabled="true"
            v-model="model[fields.id.name]"
          />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.isbn.label"
        :prop="fields.isbn.name"
        :required="fields.isbn.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            v-model="model[fields.isbn.name]"
            ref="focus"
          />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.title.label"
        :prop="fields.title.name"
        :required="fields.title.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.title.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.author.label"
        :prop="fields.author.name"
        :required="fields.author.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.author.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.numberOfCopies.label"
        :prop="fields.numberOfCopies.name"
        :required="fields.numberOfCopies.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number
            :precision="0"
            :step="1"
            v-model="model[fields.numberOfCopies.name]"
          ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.images.label"
        :prop="fields.images.name"
        :required="fields.images.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-image-upload
            :max="fields.images.max"
            :path="fields.images.path"
            :schema="fields.images.fileSchema"
            v-model="model[fields.images.name]"
          ></app-image-upload>
        </el-col>
      </el-form-item>

      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doReset"
            icon="el-icon-fa-undo"
          >
            <app-i18n code="common.reset"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { BookModel } from '@/modules/book/book-model';

const { fields } = BookModel;
const formSchema = new FormSchema([
  fields.id,
  fields.isbn,
  fields.title,
  fields.author,
  fields.numberOfCopies,
  fields.images,
]);

export default {
  name: 'app-book-form-page',

  props: ['id'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'book/form/record',
      findLoading: 'book/form/findLoading',
      saveLoading: 'book/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },

    fields() {
      return fields;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }

    this.model = formSchema.initialValues(this.record);
  },

  methods: {
    ...mapActions({
      doFind: 'book/form/doFind',
      doNew: 'book/form/doNew',
      doUpdate: 'book/form/doUpdate',
      doCreate: 'book/form/doCreate',
    }),

    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);

      if (this.isEditing) {
        return this.doUpdate({
          id,
          values,
        });
      } else {
        return this.doCreate(values);
      }
    },
  },
};
</script>

<style>
</style>
