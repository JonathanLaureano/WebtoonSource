class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :number, :content
  has_one :series
end
