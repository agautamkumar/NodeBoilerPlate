const {sequelize, Sequelize}  = require('../../database/mysql')

const UserModel               = require('./users')
// const BusinessModel           = require('./business')
// const FbPagesModel            = require('./fbPages')
// const FbUsersModel            = require('./fbUsers')
// const FilesModel              = require('./files')
// const KbModel                 = require('./kb')
// const KbFilesModel            = require('./kbFiles')
// const KbTaggingModel          = require('./kbTagging')
// const KeywordsModel           = require('./keywords')
// const MembershipPlansModel    = require('./membershipPlans')
// const MessagesModel           = require('./messages')
// const PageRelationshipModel   = require('./pageRelationship')
// const PriorityModel           = require('./priority')
// const ProductDetailsModel     = require('./productDetails')
// const ProductWebhooksModel    = require('./productWebhooks')
// const ProfileModel            = require('./profile')
// const StatusModel             = require('./status')
// const TaggingModel            = require('./tagging')
// const TokensModel             = require('./tokens')
// const UserRelationshipModel   = require('./userRelationship')
// const UserRoleModel           = require('./userRole')
// const WebhookDetailsModel     = require('./webhookDetails')

const User = UserModel(sequelize, Sequelize)
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
// const BlogTag = sequelize.define('blog_tag', {})
// const Blog = BlogModel(sequelize, Sequelize)
// const Tag = TagModel(sequelize, Sequelize)

// Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
// Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
// Blog.belongsTo(User);

sequelize.sync({ force: true })
  .then(() => {
    console.log(` SQL tables created!`)
  })

module.exports = {
  User
}