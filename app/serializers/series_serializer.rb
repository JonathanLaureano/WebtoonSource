class SeriesSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :translator, :description, :image_url
end
