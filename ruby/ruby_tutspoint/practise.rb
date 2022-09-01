# class Example 
#     Var1 =100
#     Var2 =200
#     def show 
#         puts "value of first constant is #{Var1}"
#     end
# end
# a= Example.new()
# a.show



# CONST = ' out there'
# class Inside_one
#    CONST = proc {' in there'}
#    def where_is_my_CONST
#       ::CONST + ' inside one'
#    end
# end
# class Inside_two
#    CONST = ' inside two'
#    def where_is_my_CONST
#       CONST
#    end
# end
# puts Inside_one.new.where_is_my_CONST
# puts Inside_two.new.where_is_my_CONST
# puts Object::CONST + Inside_two::CONST
# puts Inside_two::CONST + CONST
# puts Inside_one::CONST
# puts Inside_one::CONST.call + Inside_two::CONST

# OUTPUT
# out there inside one
#  inside two
#  out there inside two
#  inside two out there
# #<Proc:0x000002a547ce6ca8 practise.rb:15>
#  in there inside two


# class Box
#     # Initialize our class variables
#     @@count = 0
#     def initialize(w,h)
#        # assign instance avriables
#        @width, @height = w, h
 
#        @@count += 1
#     end
 
#     def self.printCount()
#        puts "Box count is : #@@count"
#     end
#  end
 
#  # create two object
#  box1 = Box.new(10, 20)
#  box2 = Box.new(30, 100)
 
#  # call class method to print box count
#  Box.printCount()

class Box
    # constructor method
    def initialize(w,h)
       @width, @height = w, h
    end
    # define to_s method
    def to_s
       "(w:#@width,h:#@height)"  # string formatting of the object.
    end
    def mim
         return "(w:#{@width})"
    end
 end
 
 # create an object
 box = Box.new(10, 20)

 
 # to_s method will be called in reference of string automatically.
#  puts "String representation of box is : #{box}"