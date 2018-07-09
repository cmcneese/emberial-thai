import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editItem(formValues) {

        this.model.setProperties(formValues);

        this.model.save()
          .then(() => {
            alert('Item Saved!');
            this.transitionToRoute('admin.category.detail', this.get('model.menuCategory.id'));
          });

      },
    },
  //
  //   editItem(formValues) {
  //     this.model.setProperties(formValues);
  //     this.model.save().then(() => {
  //       this.transitionToRoute('admin.category.detail', this.model.get('category'));
  //     });
  //   }
  // }
});
