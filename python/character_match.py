def is_character_match(string1, string2):
	lower_string1 = str(string1.lower().replace(" ", ""))
	lower_string2 = str(string2.lower().replace(" ", ""))

	split_string1 = list(lower_string1)
	split_string2 = list(lower_string2)

	sorted_string1 = sorted(split_string1)
	sorted_string2 = sorted(split_string2)

	
	if sorted_string1 == sorted_string2:
		return True
	else:
		 return False

is_character_match('Anna Madrigal', 'A man and a girl')